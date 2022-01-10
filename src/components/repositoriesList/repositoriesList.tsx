import React, { FC, useEffect } from 'react';
import LoaderComponent from '../loader/loader';
import RepositoryItem from './repositoryItem';
import { useQuery } from 'react-query';
import { getRepositories } from '../../api/GitHubTrendingApi';
import { useDispatch, useSelector } from 'react-redux';
import { FiltersSelector } from '../../state/filters/selectors';
import { resetFilters } from '../../state/filters/actions';
import NoData from "../noData/noData";

const RepositoriesList: FC = (): JSX.Element => {
    const { since, spoken_language, language } = useSelector(FiltersSelector);
    const dispatch = useDispatch();
    useEffect(() => {
        return () => {
            dispatch(resetFilters());
        };
    }, [dispatch]);
    const { data, isError, isLoading } = useQuery(
        [
            'repositories',
            {
                since: since.code,
                spoken_language_code: spoken_language.code,
                language: language.code
            }
        ],
        () => getRepositories({
            language: language.code, since: since.code, 'spoken_language_code': spoken_language.code
        }),
        {
            refetchOnWindowFocus: false,
        })

    if(isLoading){
        return <LoaderComponent/>;
    }

    if((!isLoading && !data?.length) || isError) {
      return <NoData section="repositories" />;
    }

    return (
        <>
            {(data)?.map((item) => {
                return <RepositoryItem key={item.rank} data={item} />
            })}
        </>
    )
}

export default RepositoriesList;