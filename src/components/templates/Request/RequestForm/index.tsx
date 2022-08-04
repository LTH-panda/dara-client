import React from "react";
import RequestField from "../RequestField";
import * as S from "./style";

type RequestFormProps = {
  form: any[];
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  categories: string[];
  onCategory: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

function RequestForm({
  form,
  onChange,
  categories,
  onCategory,
}: RequestFormProps) {
  return (
    <S.Container>
      {form &&
        form.map((F) => (
          <RequestField
            id={F.id}
            value={F.value}
            onChange={onChange}
            category={F.category}
            categories={categories}
            onCategory={(e) => onCategory(e, F.id)}
            key={F.id}
          />
        ))}
    </S.Container>
  );
}

export default RequestForm;
