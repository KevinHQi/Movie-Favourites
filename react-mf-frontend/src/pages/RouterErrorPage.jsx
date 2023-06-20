import { useRouteError } from "react-router-dom";

const RouterErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <h1>Oops!</h1>
      <p>{`${error.status}, ${error.statusText}`}</p>
      <p>{error.data}</p>
    </>
  );
};

export default RouterErrorPage;
