import { getData } from "@/db/actions/todos";
import Todos from "@/app/components/Todos";

export default async function Home() {
  const data = await getData();
  return <Todos todos={data} />;
}
