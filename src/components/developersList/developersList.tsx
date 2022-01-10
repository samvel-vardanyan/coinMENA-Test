import React, { FC, useEffect }  from 'react';
import DeveloperItem from './developerItem';
import LoaderComponent from '../loader/loader';
import { useQuery } from 'react-query';
import { getDevelopers } from "../../api/GitHubTrendingApi";
import { useSelector, useDispatch } from "react-redux";
import { FiltersSelector } from "../../state/filters/selectors";
import { resetFilters } from '../../state/filters/actions';
import NoData from "../noData/noData";

const DevelopersList: FC = (): JSX.Element => {
    const { since, spoken_language, language } = useSelector(FiltersSelector);
    const dispatch = useDispatch();
    useEffect(() => {
        return () => {
            dispatch(resetFilters());
        };
    }, [dispatch]);

    const { data, isError, isLoading } = useQuery(['developers',{
        language: language.code,
        since: since.code,
        'spoken_language_code': spoken_language.code
    }], () => {
        return getDevelopers({
            language: language.code,
            since: since.code,
            'spoken_language_code': spoken_language.code
        });
    },{
            refetchOnWindowFocus: false,
    });

    if(isLoading){
        return <LoaderComponent />;

    }

    if((!isLoading && !data?.length) || isError) {
       return <NoData section="developers" />
    }

    return (
        <>
            {data?.map((item) => {
                return <DeveloperItem data={item} key={item.rank} />
            })}
        </>
    );
};

export default DevelopersList;