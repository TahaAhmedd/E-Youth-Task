import {Link} from "react-router-dom";

export const Component = () => {
  return (
    <section className='d-flex align-items-center vh-100 text-secondary'>
      <div className='container my-5 d-flex flex-column align-items-center justify-content-center px-3'>
        <div className='text-center' style={{maxWidth: "500px"}}>
          <h2 className='display-1 fw-bold mb-5'>
            <span className='visually-hidden'>Error</span>404
          </h2>
          <p className='fs-4 fw-semibold text-dark'>Sorry, we couldn't find this page.</p>
          <p className='mb-4 mt-2 text-muted'>
            But don't worry, you can find plenty of other things on our home page.
          </p>
          <Link to='/' className='btn btn-primary'>
            Back to home page
          </Link>
        </div>
      </div>
    </section>
  );
};

Component.displayName = "NotFoundLayout";
