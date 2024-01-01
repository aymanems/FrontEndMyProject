import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Page() {
  const location = useLocation();
  const boolFromState = location.state?.bool;
  const navigate = useNavigate();

  useEffect(() => {
    if (!boolFromState) {
      navigate('/');
    }
  }, [boolFromState, navigate]);

  return (
    <div>
      {boolFromState ? (
        <div>bonjouuuuuuuuuuuuuuur</div>
      ) : (
        null
      )}
    </div>
  );
}

export default Page;
