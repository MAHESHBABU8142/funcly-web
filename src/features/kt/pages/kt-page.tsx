import Page from "../../../components/layout/page";
import {
  Headline,
  FunList,
  ImportLine,
} from "../../../components/shared/container";
import file from "../data/java-io-file-methods.json";
export default function KtPage() {
  const data = file.data;
  return (
    <Page>
      <ImportLine>java.io.File</ImportLine>
      {data.map((item) => (
        <>
          <Headline>{item.category}</Headline>
          <FunList data={item.methods} />
        </>
      ))}
    </Page>
  );
}
