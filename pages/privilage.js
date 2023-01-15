import PrivilageHeader from "../components/privilage.header";
export default function PrivilagePage() {
  return (
    <div>
      <PrivilageHeader />
      <div
        style={{
          backgroundColor: "gray",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{}}>
          <div style={{ fontSize: "30px" }}>ยังไม่มี ไก่ ? ไปหามา !</div>
          <div style={{ fontSize: "24px" }}>
            ไม่มีไก่ ก็เหมือนไม่มีไข่ ก็คือ ไม่มีไก่อะแหละ...
          </div>
        </div>
      </div>
    </div>
  );
}
