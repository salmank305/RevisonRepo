export const FormDetails = ({userdetails,childToPar}) => {
  return (
    <>
      <section>
        <h3>Details Enter</h3>
        <div>User Name :{userdetails.name}</div>
        <div>Passward:{userdetails.passward}</div>
        <div>Mobile:{userdetails.mobile}</div>
        <div>Address:{userdetails.address}</div>
        <div>Email:{userdetails.email}</div>

      {/* PASS DATA FROM CHILD TO PARENT */}

      <button onClick={()=>childToPar('salman')}>dataFromChild</button>
      </section>
    </>
  );
};
