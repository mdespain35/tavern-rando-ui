export type BackgroundInfoProps = {
  Name: string;
  Feature: {
    Name: string;
    Description: string;
  };
};

const BackgroundInfo = ({ Name, Feature }: BackgroundInfoProps) => {
  return (
    <div className="card w-50">
      <div className="card-body">
        <p className="card-title h2">{Name}</p>
        <div>
          <p className="card-subtitle h4 mb-2 text-body-secondary">
            {"Feature: " + Feature.Name}
          </p>
          <p className="card-text">{Feature.Description}</p>
        </div>
      </div>
    </div>
  );
};

export default BackgroundInfo;
