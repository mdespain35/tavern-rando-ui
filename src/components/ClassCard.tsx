interface ClassCardProps {
  Name: string;
  SubClass: string;
  Level: number;
  HitDie: number;
}

const ClassCard = ({ Name, SubClass, Level, HitDie }: ClassCardProps) => {
  return (
    <div className="card mx-auto">
      <div className="card-body">
        <p className="card-title h2">{Name}</p>
        {SubClass.length > 0 && (
          <p className="card-subtitle h4 mb-2 text-body-secondary">
            {SubClass}
          </p>
        )}
        <p className="card-text">Level: {Level}</p>
        <p className="card-text">Hit Die: {HitDie}</p>
      </div>
    </div>
  );
};

export default ClassCard;
