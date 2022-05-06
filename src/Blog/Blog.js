import React from "react";

const Blog = () => {
  return (
    <div className="container">
      <div className="row mx-auto mt-5 text-center">
        <div className="col-lg-6 col-sm-12">
          <h2 className="text-primary mb-3">Authentication vs Authorization</h2>
          <p>
            By authentication, we can identify who has permission to login and
            by authorization, we restrict the use of resources for specific
            persons. So, authorization is more of like some administrators who
            has some extra control over the applications. On the other hand,
            authentication is valid for all users which also includes
            administrators also.
          </p>
        </div>
        <div className="col-lg-6 col-sm-12">
          <h2 className="text-primary mb-3">Firebase</h2>
          <p>
            Firebase offers a authentication service which can be used to
            control who can login and how to login and registration process and
            so on. Other than authentication, it also provides hosting services
            which can be used to host websites.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
