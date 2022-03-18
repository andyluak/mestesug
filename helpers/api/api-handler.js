import { jwtMiddleware } from './jwt-middleware';
import { errorHandler } from './error-handler';

export function apiHandler(handler) {
	return async (req, res) => {
		try {
			// global middleware
			await jwtMiddleware(req, res);

			// route specific middleware
			await handler(req, res);
		} catch (err) {
			errorHandler(err, res);
		}
	};
}
