interface ClassCardProps {
  Name: string;
  SubClass: string;
  Level: number;
  HitDie: number;
}

const ClassCard = ({ Name, SubClass, Level, HitDie }: ClassCardProps) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{Name}</h5>
        {SubClass.length > 0 && (
          <h6 className="card-subtitle mb-2 text-body-secondary">{SubClass}</h6>
        )}
        <p className="card-text">Level: {Level}</p>
        <p className="card-text">Hit Die: {HitDie}</p>
      </div>
    </div>
  );
};

export default ClassCard;
