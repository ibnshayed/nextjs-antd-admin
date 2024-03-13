"use client";

import { gql, useQuery } from "@apollo/client";

const AdminInfoPage = ({ params }: { params: { id: string } }) => {
  const GET_USER = gql`
    query User($userId: ID!) {
      user(id: $userId) {
        firstName
        lastName
        email
        username
        phone
        status
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_USER, {
    variables: {
      userId: params.id,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const camelCaseToTitleCase = (text: string) => {
    const result = text.replace(/([A-Z])/g, " $1");
    const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult;
  };

  return (
    <div className="space-y-5">
      {/* <Breadcrumb
        items={[
          {
            title: <Link href="/dashboard">Dashboard</Link>,
          },
          {
            title: <Link href="/dashboard/users/admins">Admin List</Link>,
          },
          {
            title: "User Info",
          },
        ]}
      /> */}
      <div>
        <p className="text-2xl text-gray-500 font-bold">User Info:</p>
      </div>
      <div>
        <div className="text-lg grid grid-cols-2 font-bold bg-gray-200 py-2 px-3">
          <p>Title</p>
          <p>Info</p>
        </div>
        <div>
          {Object.entries(data.user).map(([k, value]) => (
            <div
              className="text-lg grid grid-cols-2 even:bg-gray-200 py-2 px-3"
              key={k}
            >
              <p className="">
                {k[0].toUpperCase() + k.slice(1).toLowerCase()}
              </p>
              <p className="font-semibold">
                {camelCaseToTitleCase(String(value))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminInfoPage;
