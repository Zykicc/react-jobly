import React from "react";
import { Link } from "react-router-dom";

function CompanyCard({ name, description, handle, logoUrl }) {
  return (
    <Link to={`/companies/${handle}`}>
      <div>
        <h3>
          {name}
          {logoUrl && <img src={logoUrl} alt={name} />}
        </h3>
        <p>
          <small>{description}</small>
        </p>
      </div>
    </Link>
  );
}
