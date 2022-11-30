import React, {
  createRef,
  SyntheticEvent,
  useRef,
  useState,
  useEffect,
} from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { checkedCartAtoms } from "../../../recoil";
import {
  AmountSection,
  CheckboxSection,
  ItemSection,
  PriceSection,
} from "./template";
import CartItem from "./item";
import { Cart } from "../../../types";

type Props = {
  cartItems: Cart[];
};
const CartList = ({ cartItems }: Props): JSX.Element => {
  const [checkedCartData, setCheckedCartData] =
    useRecoilState(checkedCartAtoms);
  const [formData, setFormData] = useState<FormData>();
  const formRef = useRef<HTMLFormElement>(null);
  const checkboxRef = cartItems.map(() => createRef<HTMLInputElement>());

  const enabledItems = cartItems.filter((item) => item.product.createdAt);

  const setAllCheckedFormItems = () => {
    // select-all 클래스를 선택할 시
    if (!formRef.current) return;
    const data = new FormData(formRef.current);
    const selectedCount = data.getAll("select-item").length;
    const allChecked = selectedCount === enabledItems.length;
    formRef.current.querySelector<HTMLInputElement>(".select-all")!.checked =
      allChecked;
  };

  const setItemsCheckedFromAll = (targetInput: HTMLInputElement) => {
    // 개별 아이템을 선택할 시
    const allChecked = targetInput.checked;
    checkboxRef
      .filter((inputElem) => {
        return !inputElem.current!.disabled;
      })
      .forEach((inputElem) => (inputElem.current!.checked = allChecked));
  };
  const handleCheckboxChanged = (event?: SyntheticEvent) => {
    if (!formRef.current) return;
    const targetInput = event?.target as HTMLInputElement;

    if (targetInput && targetInput.classList.contains("select-all")) {
      setItemsCheckedFromAll(targetInput); // select-all 선택시
    } else {
      setAllCheckedFormItems(); // 개별 아이템 선택할 때
    }
    const data = new FormData(formRef.current);
    setFormData(data);
  };
  // const handleSubmit = ()
  useEffect(() => {
    checkedCartData.forEach((item) => {
      const itemRef = checkboxRef.find(
        (ref) => ref.current!.dataset.id === item.id
      );
      if (itemRef) itemRef.current!.checked = true;
    });
    handleCheckboxChanged(null);
  }, []);

  console.log(checkedCartData);
  return (
    <Wrapper>
      <form ref={formRef} onChange={handleCheckboxChanged}>
        <Header>
          <CheckboxSection>
            <TotalCheckBox
              className="select-all"
              name="select-all"
              type="checkbox"
            />
          </CheckboxSection>
          <ItemSection>
            <TableItem>상품 정보</TableItem>
          </ItemSection>
          <AmountSection>
            <TableItem>수량 정보</TableItem>
          </AmountSection>
          <PriceSection>
            <TableItem>가격 정보</TableItem>
          </PriceSection>
        </Header>
        <List>
          {cartItems.map((item, index) => (
            <CartItem {...item} key={item.id} ref={checkboxRef[index]} />
          ))}
        </List>
      </form>
    </Wrapper>
  );
};

export default CartList;

const Wrapper = styled.section`
  width: 100%;
`;
const Header = styled.ul`
  width: 1200px;
  display: flex;
  margin: auto;
  margin-bottom: 0.5rem;
`;

const TableItem = styled.h3`
  font-size: 2.2rem;
`;

const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TotalCheckBox = styled.input`
  width: 13px;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
