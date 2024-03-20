import LoginForm from "../forms/LoginForm";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen grid grid-cols-2">
      <div className="bg-gradient-to-tl from-orange-500 to-amber-500 flex justify-center items-center">
        <div className="border size-96 rounded-full"></div>
      </div>
      <div className="flex justify-center items-center p-10">
        <div>
          <p className="text-6xl font-bold uppercase text-indigo-800">
            Welcome
          </p>
          <p className="text-2xl font-bold uppercase text-gray-800">
            Please sing in on your account
          </p>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
