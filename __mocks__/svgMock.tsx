import React, {SVGProps} from 'react';

const SvgMock = React.forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => <svg ref={ref} {...props} />,
);

SvgMock.displayName = 'SvgMock';

export const ReactComponent = SvgMock;
export default SvgMock;
