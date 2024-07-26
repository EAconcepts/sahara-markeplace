import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { NextPage } from 'next';
import { useAuth } from '@/utils/useAuth';

type ProtectedPageProps = {
  Component: NextPage;
};

const withAuth = (Component: NextPage) => {
  const ProtectedPage = (props:any) => {
    const { token } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!token) {
        router.replace('/auth/signin');
      }
    }, [token, router]);

    // eslint-disable-next-line
    return <Component {...props} />;
  };

  return ProtectedPage;
};

export default withAuth;
