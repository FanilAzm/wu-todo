import React, {useState, useEffect, useCallback} from 'react';
import Form from '../Form/Form';
import EditForm from '../EditForm/EditForm';
import Modal from '../Modal/Modal';
import Browsing from '../Browsing/Browsing';
import Alert from '../Alert/Alert';

const ModalContent = ({
	modal,
	setModal,
	initialModal,
	setInitialModal,
	addTodo,
	viewTodo,
	editTodo,
	removeTodo
}) => {
	const [showContent, setShowContent] = useState(false);

	useEffect(() => {
    if(modal) {
      setShowContent(true)
    } else {
      setTimeout(() => {
        setShowContent(false)
      }, 0);
    }
  }, [modal])

	const renderModalData = useCallback((type) => {
		switch(type) {
			case 'add':
				return (
					<Form addTodo={addTodo} />
				)
			case 'view':
				return (
					<Browsing
						item={viewTodo}
						setModal={setModal}
						setInitialModal={setInitialModal}
					/>
				)
			case 'delete':
				return (
					<Alert
						item={viewTodo}
						removeTodo={removeTodo}
						setModal={setModal}
					/>
				)
			case 'edit':
				return (
					<EditForm
						item={viewTodo}
						editTodo={editTodo}
						setModal={setModal}
					/>
				)
		}
	})

	return (
		<Modal displayModal={modal} closeModal={() => setModal(false)}>
			{ showContent && renderModalData(initialModal) }
		</Modal>
	)
}

export default ModalContent;