export default function UserProfile({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="test-center text-white text-2xl">user profile Page</h1>
      <h1 className="test-center text-white text-2xl">{params.id}</h1>
    </div>
  );
}
