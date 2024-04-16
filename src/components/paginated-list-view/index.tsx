import {PaginationState} from '@/utils/enums';
import {FlatList, View} from 'react-native';
import React from 'react';
import AppActivityIndicator from '../app-activity-indicator';
import {paginatedListViewStyles} from './styles';
import {PaginatedListViewProps} from './type';
import {XIcon} from '@/assets/svg';
import {hp} from '@/resources/config';
import VoidFunction from '@/types/voidfunction';
import AlertBubbleIconWrapper from '../alert-bubble-icon-wrapper';
import AnimatedBubble from '../animated-bubble';
import {AppAlert} from '../common';

const PaginatedListView = <T,>({
  HeaderComponent,
  FooterComponent,
  EmptyStateComponent,
  onLoadMore,
  contentContainerStyle,
  onRefresh,
  paginationState,
  handleFirstPageRefetch,
  ...otherFlatListProps
}: PaginatedListViewProps<T>) => {
  const styles = paginatedListViewStyles;

  const refreshing = paginationState === PaginationState.BackgroundRefresh;

  if (paginationState === PaginationState.NoItems) {
    return <>{EmptyStateComponent}</>;
  } else if (paginationState === PaginationState.FirstPageError) {
    return <ErrorStateComponent onRetry={handleFirstPageRefetch} />;
  }

  return (
    <FlatList
      contentInsetAdjustmentBehavior={'automatic'}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      keyboardShouldPersistTaps={'handled'}
      contentContainerStyle={[contentContainerStyle, styles.default]}
      ListHeaderComponent={
        HeaderComponent ?? <DefaultHeaderComponent state={paginationState} />
      }
      ListFooterComponent={
        FooterComponent ?? <DefaultFooterComponent state={paginationState} />
      }
      onEndReached={onLoadMore}
      onEndReachedThreshold={0.1}
      refreshing={refreshing}
      extraData={refreshing}
      onRefresh={onRefresh}
      ItemSeparatorComponent={Separator}
      {...otherFlatListProps}
    />
  );
};

export default PaginatedListView;

const DefaultHeaderComponent = ({state}: {state: PaginationState}) => {
  const styles = paginatedListViewStyles;
  return state === PaginationState.FirstPageProgress ? (
    <AppActivityIndicator style={styles.activityIndicator} />
  ) : (
    <></>
  );
};
const DefaultFooterComponent = ({state}: {state: PaginationState}) => {
  const styles = paginatedListViewStyles;
  return state === PaginationState.NewPageProgress ? (
    <AppActivityIndicator style={styles.activityIndicator} />
  ) : (
    <></>
  );
};

const ErrorStateComponent = ({onRetry}: {onRetry: VoidFunction}) => {
  return (
    <AppAlert
      title={'Oops!'}
      description={'Something went wrong. Please try again'}
      buttonText={'Retry'}
      buttonWidth={null}
      onPress={onRetry}
      containerStyle={{
        marginTop: hp(64),
      }}
      icon={
        <AnimatedBubble
          bgColor={'danger25'}
          size={90}
          Icon={
            <AlertBubbleIconWrapper
              colorKey={'danger50'}
              icon={<XIcon width={36} height={36} />}
            />
          }
        />
      }
    />
  );
};

const Separator = () => {
  const styles = paginatedListViewStyles;
  return <View style={styles.seperator} />;
};
