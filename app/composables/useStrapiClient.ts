export const useStrapiClient = () => {
  const config = useRuntimeConfig();
  const { strapiUrl, strapiToken } = config.public;

  const fetchStrapi = async <T>(endpoint: string, options: any = {}) => {
    const url = `${strapiUrl}/api/${endpoint}`;
    
    const defaultOptions = {
      headers: {
        Authorization: strapiToken ? `Bearer ${strapiToken}` : '',
      },
    };

    return $fetch<T>(url, { ...defaultOptions, ...options });
  };

  const find = async <T>(contentType: string, query: any = {}) => {
    // Basic query string builder (very simplified)
    const queryString = new URLSearchParams();
    if (query.populate) queryString.append('populate', query.populate);
    
    // You can expand this to handle filters, sorting, etc.
    const endpoint = query.populate ? `${contentType}?${queryString.toString()}` : contentType;
    
    return fetchStrapi<T>(endpoint);
  };

  const findOne = async <T>(contentType: string, id?: string | number, query: any = {}) => {
    const endpoint = id ? `${contentType}/${id}` : contentType;
    const queryString = new URLSearchParams();
    if (query.populate) queryString.append('populate', query.populate);
    
    const finalEndpoint = query.populate ? `${endpoint}?${queryString.toString()}` : endpoint;

    return fetchStrapi<T>(finalEndpoint);
  };

  return {
    fetchStrapi,
    find,
    findOne
  };
};
