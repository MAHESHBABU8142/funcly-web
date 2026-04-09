import Page from "../../../components/layout/page";
import { FunList, Headline } from "../../../components/shared/container";
import data from "../data/array-methods.json";
export default function JsPage() {
  const arrayMethods = data.array_methods;
  //const [data, setData] = useState([]);
  /* useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://raw.githubusercontent.com/MAHESHBABU8142/funcly-web/refs/heads/master/src/features/js/data/array-methods.json",
      );
      const data = await res.json();
      setData(data.array_methods);
    }
    fetchData();
  }, []);*/
  return (
    <Page>
      <Headline>Array methods</Headline>
      <FunList data={arrayMethods} />
    </Page>
  );
}
