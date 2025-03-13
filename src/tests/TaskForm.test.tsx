import { fireEvent,render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../theme/theme';
import TaskForm from '../components/TaskForm/TaskForm';

const mockSetTitle = jest.fn();
const mockSetDescription = jest.fn();
const mockSetPriority = jest.fn();
const mockOnSave = jest.fn();
const mockOnCancel = jest.fn();

describe('TaskForm Component', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render without errors', () => {
        render(
            <ThemeProvider theme={theme}>
                <TaskForm
                    title="Test Title"
                    description="Test Description"
                    priority="High"
                    setTitle={mockSetTitle}
                    setDescription={mockSetDescription}
                    setPriority={mockSetPriority}
                    onSave={mockOnSave}
                    onCancel={mockOnCancel}
                />
            </ThemeProvider>
        );
    });

    it('should update title when title input changes', () => {
        render(
            <ThemeProvider theme={theme}>
                <TaskForm
                    title="Test Title"
                    description="Test Description"
                    priority="High"
                    setTitle={mockSetTitle}
                    setDescription={mockSetDescription}
                    setPriority={mockSetPriority}
                    onSave={mockOnSave}
                    onCancel={mockOnCancel}
                />
            </ThemeProvider>
        );

        const titleInput = screen.getByLabelText('Title');
        fireEvent.change(titleInput, { target: { value: 'New Title' } });

        expect(mockSetTitle).toHaveBeenCalledWith('New Title');
    });

    it('should update description when description input changes', () => {
        render(
            <ThemeProvider theme={theme}>
                <TaskForm
                    title="Test Title"
                    description="Test Description"
                    priority="High"
                    setTitle={mockSetTitle}
                    setDescription={mockSetDescription}
                    setPriority={mockSetPriority}
                    onSave={mockOnSave}
                    onCancel={mockOnCancel}
                />
            </ThemeProvider>
        );

        const descriptionInput = screen.getByLabelText('Description');
        fireEvent.change(descriptionInput, { target: { value: 'New Description' } });

        expect(mockSetDescription).toHaveBeenCalledWith('New Description');
    });

    it('should update priority when priority select changes', () => {
        render(
            <ThemeProvider theme={theme}>
                <TaskForm
                    title="Test Title"
                    description="Test Description"
                    priority="High"
                    setTitle={mockSetTitle}
                    setDescription={mockSetDescription}
                    setPriority={mockSetPriority}
                    onSave={mockOnSave}
                    onCancel={mockOnCancel}
                />
            </ThemeProvider>
        );

        const prioritySelect = screen.getByLabelText('Priority');
        fireEvent.change(prioritySelect, { target: { value: 'Medium' } });

        expect(mockSetPriority).toHaveBeenCalledWith('Medium');
    });

    it('should call onSave when save button is clicked', () => {
        render(
            <ThemeProvider theme={theme}>
                <TaskForm
                    title="Test Title"
                    description="Test Description"
                    priority="High"
                    setTitle={mockSetTitle}
                    setDescription={mockSetDescription}
                    setPriority={mockSetPriority}
                    onSave={mockOnSave}
                    onCancel={mockOnCancel}
                />
            </ThemeProvider>
        );

        const saveButton = screen.getByText('Save');
        fireEvent.click(saveButton);

        expect(mockOnSave).toHaveBeenCalledTimes(1);
    });

    it('should call onCancel when cancel button is clicked', () => {
        render(
            <ThemeProvider theme={theme}>
                <TaskForm
                    title="Test Title"
                    description="Test Description"
                    priority="High"
                    setTitle={mockSetTitle}
                    setDescription={mockSetDescription}
                    setPriority={mockSetPriority}
                    onSave={mockOnSave}
                    onCancel={mockOnCancel}
                />
            </ThemeProvider>
        );

        const cancelButton = screen.getByText('Cancel');
        fireEvent.click(cancelButton);

        expect(mockOnCancel).toHaveBeenCalledTimes(1);
    });
});