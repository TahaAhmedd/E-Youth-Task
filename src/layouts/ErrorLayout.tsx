import {Button} from "@mui/material";
import {isRouteErrorResponse, useRouteError} from "react-router";

const ErrorLayout = () => {
  const routeError = useRouteError();

  return (
    <section className='d-flex align-items-center justify-content-center vh-100'>
      <div className='container text-center'>
        {/* Large Heading */}
        <h2
          className='mb-5 fw-bold text-dark'
          style={{
            fontSize: "7rem",
            textShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        >
          Oops!
        </h2>

        {/* Error Message */}
        <p className='h4 fw-semibold text-dark'>Something went wrong</p>

        {/* Route Error Details */}
        <p className='mt-3 mb-5 text-muted'>
          {isRouteErrorResponse(routeError) && (
            <>
              {routeError.status} <br />
              {routeError.statusText} <br />
              {routeError.data}
            </>
          )}
        </p>

        {/* Refresh Button */}
        <Button variant='contained' color='primary' onClick={() => window.location.reload()}>
          Refresh Page
        </Button>
      </div>
    </section>
  );
};

export default ErrorLayout;
