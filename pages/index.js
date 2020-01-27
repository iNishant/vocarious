import Head from 'next/head'

function HomePage () {
  return (
    <div>
      <Head>
        <title>Vocarious</title>
      </Head>
      <img
        style={{
          position: 'fixed', 
          top: 'calc(50vh - 25px)',
          height: '50px',
          width: 'auto',
          left: 'calc(50vw - 80px)',
        }}
        src="/images/logo.png"
      />
    </div>
  );
}

export default HomePage;
