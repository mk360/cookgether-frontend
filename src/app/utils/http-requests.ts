type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface HttpRequestOptions {
    headers?: Record<string, string>;
    body?: any;
    params?: Record<string, string | number>;
}

interface IHttpClient {
    get<T>(url: string, options?: HttpRequestOptions): Promise<T>;
    post<T>(url: string, options?: HttpRequestOptions): Promise<T>;
    put<T>(url: string, options?: HttpRequestOptions): Promise<T>;
    delete<T>(url: string, options?: HttpRequestOptions): Promise<T>;
}

class FetchHttpClient implements IHttpClient {
    private buildUrl(url: string, params?: Record<string, string | number>): string {
        if (!params) return url;
        const query = new URLSearchParams(params as Record<string, string>).toString();
        return query ? `${url}?${query}` : url;
    }

    private async request<T>(
        method: HttpMethod,
        url: string,
        options: HttpRequestOptions = {}
    ): Promise<T> {
        const { headers = {}, body, params } = options;
        const fetchOptions: RequestInit = {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
        };

        if (body !== undefined && method !== 'GET') {
            fetchOptions.body = JSON.stringify(body);
        }

        const response = await fetch(this.buildUrl(url, params), fetchOptions);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Try to parse JSON, fallback to text
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            return response.json();
        }
        return response.text() as unknown as T;
    }

    get<T>(url: string, options?: HttpRequestOptions): Promise<T> {
        return this.request<T>('GET', url, options);
    }

    post<T>(url: string, options?: HttpRequestOptions): Promise<T> {
        return this.request<T>('POST', url, options);
    }

    put<T>(url: string, options?: HttpRequestOptions): Promise<T> {
        return this.request<T>('PUT', url, options);
    }

    delete<T>(url: string, options?: HttpRequestOptions): Promise<T> {
        return this.request<T>('DELETE', url, options);
    }
}

// Default HTTP proxy instance
const http = new FetchHttpClient();

export default http;
export type { IHttpClient, HttpRequestOptions };