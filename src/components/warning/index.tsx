// HOC
type Props = {
  children: string;
};

const Warning = ({ children }: Props) => {
  return <div className="home__error-container"></div>;
};

export default Warning;
