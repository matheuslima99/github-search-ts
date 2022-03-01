import { useParams } from 'react-router-dom';

export const Profile = () => {
  const params = useParams();

  return (
    <div>
      Profile page
      <br />
      {params.user}
    </div>
  );
};
