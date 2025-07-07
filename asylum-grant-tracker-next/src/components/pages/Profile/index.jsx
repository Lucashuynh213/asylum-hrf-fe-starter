/**
 * TODO: Ticket 3:
 * Implement authentication using Auth0:
 * - Get the user data from Auth0
 * - Create and style the component
 * - Display the data
 * - Make this page a protected Route
 */
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <div className="text-center p-4">Loading...</div>;
  if (!isAuthenticated) return <div className="text-center p-4">You are not logged in.</div>;

  return (
    <div className="max-w-xl mx-auto mt-8 p-6 shadow-lg rounded bg-white">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <img src={user.picture} alt="User Avatar" className="rounded-full w-24 mb-4" />
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      {user.nickname && <p><strong>Nickname:</strong> {user.nickname}</p>}
    </div>
  );
};

export default Profile;