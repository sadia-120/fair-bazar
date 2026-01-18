import { useQuery } from '@tanstack/react-query';
import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import useAxiosSquer from './useAxiosSquer';

const useUserRole = () => {
    const {user} = use(AuthContext);
    const axiosSquer = useAxiosSquer();

    const {data: userInfo = {}, isLoading} = useQuery({
        queryKey: ["logged-user", user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSquer.get(`/user?email=${user?.email}`);
            return res.data;
        }
    });

    return {userInfo, isLoading};
};

export default useUserRole;