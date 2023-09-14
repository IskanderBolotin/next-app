import { createPortal } from 'react-dom';


type PortalProps = { children: React.ReactNode; };

const Portal = (props: PortalProps) => {
  const { children } = props;

  return createPortal(children, document.body);
};

export default Portal;