class Messages {
    constructor($timeout) {
        this.message = "";

        this.errorMessage = (text) => {
            this.message = text;
            var messageContainer = angular.element(document.querySelector('#alert-message'));
            messageContainer.removeClass('hidden');
            messageContainer.addClass('alert-danger');
            $timeout(this.dismissAlert, 7000);
        };

        this.infoMessage = (text) => {
            this.message = text;
            var messageContainer = angular.element(document.querySelector('#alert-message'));
            messageContainer.removeClass('hidden');
            messageContainer.addClass('alert-info');
            $timeout(this.dismissAlert, 3000);
        };

        this.dismissAlert = () => {
            var messageContainer = angular.element(document.querySelector('#alert-message'));
            messageContainer.addClass('hidden');
            messageContainer.removeClass('alert-info');
            messageContainer.removeClass('alert-danger');
        };
    }

}
export default Messages;
