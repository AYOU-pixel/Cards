export const metadata = {
    title: 'articels'
  }
export default function Layout({children}) {
    return (
        <>
            <h1 style={{ textAlign: 'center', color: 'green', marginTop: '20px' }}>Welcome</h1>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '50vh',
                backgroundColor: 'red',
                padding: '10px',
            }}>
                {children}
            </div>
        </>
    );
}
