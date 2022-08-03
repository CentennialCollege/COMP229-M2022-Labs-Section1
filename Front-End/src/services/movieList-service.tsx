import http from '../components/http-common';
import MoveModel from '../models/Movie';
import AuthHeader from './auth-header';

class MovieListDataService
{
    readAll()
    {
        return http.get<Array<MoveModel>>("/movie-list", AuthHeader());
    }
}

export default new MovieListDataService();