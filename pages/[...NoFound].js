import { useRouter } from "next/router";

function NoFound() {
  const router = useRouter();
  return (
    <div>
      <h1>404</h1>
      <p>The page{router.query.noFound} could not be found.</p>
    </div>
  );
}
export default NoFound;
