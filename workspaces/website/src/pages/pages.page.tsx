import PagePage, { Props } from "src/pages/PagePage";
import NotFound from "@ui/NotFound/NotFound";

export function Page({ data }: Props): JSX.Element {
  if (data == null) {
    return <NotFound type="page" />;
  }

  return <PagePage data={data} />;
}
