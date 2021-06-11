import { fetchLimitVar } from "./graphql/queries";

export default function setPreviousPageState() {
  document.cookie = `${JSON.stringify({
    scrollPos: window.scrollY,
    fetched: fetchLimitVar(),
  })};SameSite=Strict; max-age=${60 * 60}`;
}
