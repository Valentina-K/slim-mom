import { DiaryDateCalendar } from 'components/DiaryDateCalendar/DiaryDateCalendar';
import { RightSideBar } from 'components/RightSideBar/RightSideBar';
import { DiaryAddProductForm } from 'components/DiaryAddProductForm/DiaryAddProductForm';
const DiaryPage = () => {
  return (
    <>
      <DiaryDateCalendar />
      <DiaryAddProductForm />
      <RightSideBar />;
    </>
  );
};
export default DiaryPage;
