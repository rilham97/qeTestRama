const endpoint = require('../endpoint/patchQr');
const dataRequest = require('../dataRequest/patchQr');

describe('Update QR', () => {

    //testcase xen_1
    test('Verify user success update QR code with correct parameter', async ()=> {
        const response = await endpoint.patchQr('qr_registered_123',dataRequest.dataCorrect);
        
        expect(response.status).toEqual(200);
        expect(response.body).toEqual(
            expect.objectContaining({
                description: expect.any(String),
                callback_url: expect.any(String),
                amount: expect.any(Number),
            })
        )
    });
    
    //testcase xen_2
    test('Verify user still success update QR code without change any data', async ()=> {
        const response = await endpoint.patchQr('qr_registered_123',dataRequest.dataNotUpdate);
        
        expect(response.status).toEqual(200);
        expect(response.body).toEqual(
            expect.objectContaining({
                description: expect.any(String),
                callback_url: expect.any(String),
                amount: expect.any(Number),
            })
        )
    });

    //testcase xen_3
    test('Verify user success update QR code with amount value exact min (1500)', async ()=> {
        const response = await endpoint.patchQr('qr_registered_123',dataRequest.dataAmountMin);
        
        expect(response.status).toEqual(200);
        expect(response.body).toEqual(
            expect.objectContaining({
                description: expect.any(String),
                callback_url: expect.any(String),
                amount: expect.any(Number),
            })
        )  
    });

    //testcase xen_4
    test('Verify user success update QR code with amount value exact max (5000000)', async ()=> {
        const response = await endpoint.patchQr('qr_registered_123',dataRequest.dataAmountMax);
        
        expect(response.status).toEqual(200);
        expect(response.body).toEqual(
            expect.objectContaining({
                description: expect.any(String),
                callback_url: expect.any(String),
                amount: expect.any(Number),
            })
        )  
    });
    //testcase xen_8
    test(`Verify user failed update QR code when input amount less than min (<1500)`, async ()=> {
        const response = await endpoint.patchQr('qr_registered_123',dataRequest.dataAmountLessMin);
        
        expect(response.status).toEqual(400);
        expect(response.body.error_code).toContain("API_VALIDATION_ERROR")
    });
    
    //testcase xen_9
    test(`Verify user failed update QR code when input amount more than max (> 5000000)`, async ()=> {
        const response = await endpoint.patchQr('qr_registered_123',dataRequest.dataAmountMoreMax);
        
        expect(response.status).toEqual(400);
        expect(response.body.error_code).toContain("API_VALIDATION_ERROR")
    });
    
    //testcase xen_5
    test(`Verify user failed update QR code when fill null / blank empty on field 'description'`, async ()=> {
        const response = await endpoint.patchQr('qr_registered_123',dataRequest.dataNullDescription);
        
        expect(response.status).toEqual(400);
        expect(response.body.error_code).toContain("API_VALIDATION_ERROR")
    });

    //testcase xen_6
    test(`Verify user failed update QR code when fill null / blank empty on field 'callback_url'`, async ()=> {
        const response = await endpoint.patchQr('qr_registered_123',dataRequest.dataNullCallback);
        
        expect(response.status).toEqual(400);
        expect(response.body.error_code).toContain("API_VALIDATION_ERROR")
    });

     //testcase xen_7   
    test(`Verify user failed update QR code when fill null / blank empty on field 'amount'`, async ()=> {
        const response = await endpoint.patchQr('qr_registered_123',dataRequest.dataNullAmount);
        
        expect(response.status).toEqual(400);
        expect(response.body.error_code).toContain("API_VALIDATION_ERROR")
    });

    //testcase xen_10
    test(`Verify user failed update QR code when input worng format on field 'callback_url' (not valid url)`, async ()=> {
        const response = await endpoint.patchQr('qr_registered_123',dataRequest.dataCallbackNotUrl);
        
        expect(response.status).toEqual(400);
        expect(response.body.error_code).toContain("API_VALIDATION_ERROR")
    });

    //testcase xen_11
    test(`Verify user failed update QR code when input  non numeric on field 'amount'`, async ()=> {
        const response = await endpoint.patchQr('qr_registered_123',dataRequest.dataAmountNotNumeric);
        
        expect(response.status).toEqual(400);
        expect(response.body.error_code).toContain("API_VALIDATION_ERROR")
    });

    //testcase xen_12
    test(`Verify user failed update QR code when input decimal type on field 'amount'`, async ()=> {
        const response = await endpoint.patchQr('qr_registered_123',dataRequest.dataAmountDecimal);
        
        expect(response.status).toEqual(400);
        expect(response.body.error_code).toContain("API_VALIDATION_ERROR")
    });

    //testcase xen_13
    test(`Verify user failed update QR code when input unregistered qr_id`, async ()=> {
        const response = await endpoint.patchQr('qr_not_registered_123',dataRequest.dataCorrect);
        
        expect(response.status).toEqual(400);
        expect(response.body.error_code).toContain("QR_CODE_NOT_FOUND_ERROR")
    });

    //testcase xen_14
    test(`Verify user failed update QR code when input unregistered qr_id`, async ()=> {
        const response = await endpoint.patchQr('qr_expired_123',dataRequest.dataCorrect);
        
        expect(response.status).toEqual(400);
        expect(response.body.error_code).toContain("QR_CODE_CODE_IN_USE")
    });

    //testcase xen_15
    test('Failed Update with wrong json format', async ()=> {
        const response = await endpoint.patchQr('qr_registered_123',dataRequest.dataWrongJsonFormat);
        
        expect(response.status).toEqual(400);
        expect(response.body.error_code).toContain("INVALID_JSON_FORMAT")
    });

    //testcase xen_17
    test('Verify user failed update QR code when input unKnown param', async ()=> {
        const response = await endpoint.patchQr('qr_registered_123',dataRequest.dataContainUnknownParam);
        
        expect(response.status).toEqual(400);
        expect(response.body.error_code).toContain("API_VALIDATION_ERROR")
    });


});