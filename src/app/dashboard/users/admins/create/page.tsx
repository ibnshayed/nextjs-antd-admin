import AdminCreateForm from "@/components/forms/AdminCreateForm";

const AdminCreatePage = () => {
  return (
    <div className="space-y-5">
      <div>
        <p className="text-2xl text-gray-500 font-bold">Create An Admin</p>
      </div>
      <AdminCreateForm />
    </div>
  );
};

export default AdminCreatePage;
