import { useState } from 'react';

import Alert from "@components/Alert";
import { CardItem } from '@components/Card/Card.styles';
import TaskForm from "@components/TaskForm";
import { FILL_ALL_FIELDS } from "@constants/errors";
import { DEFAULT_PRIORITY, TASK_DESCRIPTION_PLACEHOLDER, TASK_TITLE_PLACEHOLDER } from "@constants/labels";
import { NewTaskCardProps } from '@types';
import useAlert from "@utils/useAlert";

const NewTaskCard: React.FC<NewTaskCardProps> = ({ onClose, onSave }) => {
    const [title, setTitle] = useState(TASK_TITLE_PLACEHOLDER);
    const [description, setDescription] = useState(TASK_DESCRIPTION_PLACEHOLDER);
    const [priority, setPriority] = useState(DEFAULT_PRIORITY);
    const [alertMessage, showAlert, closeAlert] = useAlert();   
    const handleSaveClick = () => {
        if (title !== TASK_TITLE_PLACEHOLDER && description !== TASK_DESCRIPTION_PLACEHOLDER && priority) {
            onSave({ title, description, priority });
            setTitle(TASK_TITLE_PLACEHOLDER);
            setDescription(TASK_DESCRIPTION_PLACEHOLDER);
            setPriority(DEFAULT_PRIORITY);
        } else {
            showAlert(FILL_ALL_FIELDS);
        }
    };

    return (
        <CardItem>
            <TaskForm
                title={title}
                description={description}
                priority={priority}
                setTitle={setTitle}
                setDescription={setDescription}
                setPriority={setPriority}
                onSave={handleSaveClick}
                onCancel={onClose}
            />
            {alertMessage && <Alert message={alertMessage} onClose={closeAlert} />}
        </CardItem>
    );
};

export default NewTaskCard;