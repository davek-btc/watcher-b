(define-constant monitored-address 'SP2MYS2F77WK4VGK22EX3GQ6155BW63AJ3RDX8Y30)

;; Function to get the STX balance of the monitored address
(define-read-only (get-monitored-address-balance)
    (let ((balance (stx-get-balance monitored-address)))
        (ok balance)
    )
)