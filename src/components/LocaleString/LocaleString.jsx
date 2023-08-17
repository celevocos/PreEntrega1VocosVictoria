export const LocaleString = ({ num }) => {
    return (
      <span>
        $
        {num.toLocaleString("es-AR", {
          maximumFractionDigits: 2,
          minimumFractionDigits: 2,
        })}
      </span>
    );
  };