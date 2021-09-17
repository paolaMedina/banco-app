import axios from 'axios';
import { useEffect, useState } from 'react';

export const useAxios = (type, url, body = null, headers = {}) => {
  const [state, setState] = useState({ data: null, loading: true, error: null });
  useEffect(() => {
    setState({ data: null, loading: true, error: null });
    if (url) {
      const option = {
        method: type,
        headers: headers,
        data: body,
        url: `http://127.0.0.1:8000/api/${url}`,
      };
      axios(option)
        .then(({ data }) => {
          setState({
            loading: false,
            error: null,
            data,
          });
        })
        .catch((error) => {
          setState({
            loading: false,
            error,
            data: null,
          });
          console.log(error);
        });
    }
  }, [type === 'POST' ? (body, url) : url]);

  return state;
};
