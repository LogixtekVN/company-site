
export default function Index() {
  return null;
}

Index.getInitialProps = (ctx) => {
  // We check for ctx.res to make sure we're on the server.
  if (ctx.res) {
    ctx.res.writeHead(302, { Location: "/en" });
    ctx.res.end();
  }
  return {};
};
