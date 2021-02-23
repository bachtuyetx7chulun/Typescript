import express, { Router, Request, Response, NextFunction } from 'express'
const router = Router()

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.json({
        status: 200,
        message: 'Wellcome to the Api for manangerment'
    })
})

export default router
