function Outer({ children }) {
  return (
    <div>
      <header>
        <h1>Home Page</h1>
      </header>
      <main>
        {children}
      </main>
    </div>
  );
}

function Inner({ text }) {
  return (
    <p>{text}</p>
  );
}

export function Index() {
  // TODO útfæra yfirlitssíðu
  return (
    <Outer>
      <Inner text="This is my homepage" />
      <Inner text="Do you love it?" />
    </Outer>
  );
}
