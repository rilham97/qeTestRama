const dataCorrect = {
	"callback_url": "https://updatesite.com/callback",
	"amount": 100000,
    "description": "This is updated desc"
}

const dataNotUpdate = {
	"callback_url": "https://currentsite.com/callback",
	"amount": 2000,
    "description": "This is current desc"
}

const dataAmountMin = {
	"callback_url": "https://updatesite.com/callback",
	"amount": 1500,
    "description": "This is my description"
}

const dataAmountLessMin = {
	"callback_url": "https://updatesite.com/callback",
	"amount": 1499,
    "description": "This is my description"
}

const dataAmountMax = {
	"callback_url": "https://updatesite.com/callback",
	"amount": 5000000,
    "description": "This is my description"
}

const dataAmountMoreMax = {
	"callback_url": "https://updatesite.com/callback",
	"amount": 5000001,
    "description": "This is my description"
}

const dataNullDescription = {
	"callback_url": "https://updatesite.com/callback",
	"amount": 750000,
	"description": null
}

const dataNullCallback = {
	"callback_url": null,
	"amount": 750000,
    "description": "This is my description"
}

const dataNullAmount = {
	"callback_url": "https://updatesite.com/callback",
	"amount": null,
    "description": "This is my description"
}

const dataCallbackNotUrl = {
	"callback_url": "This is string callback",
	"amount": 50000,
    "description": "This is my description"
}

const dataAmountNotNumeric = {
	"callback_url": "https://updatesite.com/callback",
	"amount":  "1,500 USD",
    "description": "This is my description"
}

const dataAmountDecimal = {
	"callback_url": "https://updatesite.com/callback",
	"amount": 2000.123,
    "description": "This is my description"
}

//Still no solution to create wrong format without break all scripts
const dataWrongJsonFormat = {
	"callback_url": "https://updatesite.com/callback",
	"amount": 123123,
    "description": "This is my description"
}

const dataContainUnknownParam = {
	"callback_url": "https://updatesite.com/callback",
	"amount": 100000,
    "description": "This is updated desc",
	"test" : "test"
}

module.exports = {
    dataCorrect,
	dataNotUpdate,
    dataAmountMin,
    dataAmountLessMin,
    dataAmountMax,
    dataAmountMoreMax,
    dataNullDescription,
    dataNullCallback,
    dataNullAmount,
	dataCallbackNotUrl,
	dataAmountNotNumeric,
	dataAmountDecimal,
	dataWrongJsonFormat,
	dataContainUnknownParam
};