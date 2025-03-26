import { Button, Modal } from 'antd';

export default function () {
  const aaa = () => {
    Modal.confirm({
      title: 'Confirm',
      content: 'Bla bla ...',
      okText: 'OK',
      cancelText: 'Cancel',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      }
    });
  };

  return (
    <div>
      <Button onClick={aaa}>123</Button>
    </div>
  );
}
